import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const TryOn = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [selectedClothing, setSelectedClothing] = useState(null);
  const clothingImgRef = useRef(new Image());
  const [clothingPosition, setClothingPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      startWebcam();
    };

    loadModels();
  }, []);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          detectFace();
        };
      }
    } catch (err) {
      console.error("Error accessing webcam:", err);
    }
  };

  const detectFace = async () => {
    if (!videoRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    const processFrame = async () => {
      if (!videoRef.current || !canvasRef.current) return;

      const detections = await faceapi.detectSingleFace(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      ).withFaceLandmarks();

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (detections) {
        calculateClothingPosition(detections);
        drawClothingOverlay(detections);
      }

      requestAnimationFrame(processFrame);
    };

    processFrame();
  };

  const calculateClothingPosition = (detections) => {
    if (!detections) return;

    const { x, y, width, height } = detections.detection.box;
    
    setClothingPosition({
      x: x - width * 0.2,  // Adjust horizontal position
      y: y + height * 0.5, // Adjust vertical position (on the torso)
      width: width * 1.5,   // Adjust width for the clothing item
      height: height * 2,   // Adjust height for the clothing item (taller for a shirt)
    });
  };

  const drawClothingOverlay = (detections) => {
    const canvas = canvasRef.current;
    if (!canvas || !selectedClothing) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    ctx.drawImage(
      clothingImgRef.current,
      clothingPosition.x, 
      clothingPosition.y, 
      clothingPosition.width, 
      clothingPosition.height
    );
  };

  const handleClothingSelection = (imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      clothingImgRef.current = img;
      setSelectedClothing(imageSrc);
    };
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Try On Clothes</h2>

      <div style={{ position: "relative", display: "inline-block" }}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{
            width: "50%",
            transform: "scaleX(-1)", // Mirror effect
            border: "2px solid black",
          }}
        />
        <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "10px" }}>
        <img 
          src="/assets/images/products/kid1.jpg" 
          alt="Hoodie" 
          onClick={() => handleClothingSelection("/assets/images/products/kid1.jpg")} 
          style={{ width: "80px", cursor: "pointer", border: selectedClothing === "/assets/images/products/kid1.jpg" ? "2px solid blue" : "2px solid transparent" }} 
        />
        <img 
          src="/assets/images/products/kid2.jpg" 
          alt="Scarf" 
          onClick={() => handleClothingSelection("/assets/images/products/kid2.jpg")} 
          style={{ width: "80px", cursor: "pointer", border: selectedClothing === "/assets/images/products/kid2.jpg" ? "2px solid blue" : "2px solid transparent" }} 
        />
        <img 
          src="/assets/images/products/kid3.jpg" 
          alt="Mask" 
          onClick={() => handleClothingSelection("/assets/images/products/kid3.jpg")} 
          style={{ width: "80px", cursor: "pointer", border: selectedClothing === "/assets/images/products/kid3.jpg" ? "2px solid blue" : "2px solid transparent" }} 
        />
      </div>
    </div>
  );
};

export default TryOn;
