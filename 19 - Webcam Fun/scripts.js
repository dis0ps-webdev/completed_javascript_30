const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

async function getConnectedDevices(type) {
  let devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter((device) => device.kind === type);
}

async function openCamera(cameraId, minWidth, minHeight) {
  const constraints = {
    video: {
      deviceId: cameraId,
      width: { min: minWidth },
      height: { min: minHeight },
    },
  };

  return await navigator.mediaDevices.getUserMedia(constraints);
}

async function startVideo(camera) {
  const stream = await openCamera(camera.deviceId, 1280, 720);

  video.srcObject = stream;
  video.play();

  return setInterval(() => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  }, 16);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  let imageSrc = canvas.toDataURL("image/jpg");

  let imageTag = document.createElement("img");
  imageTag.src = imageSrc;

  let imageAnchor = document.createElement("a");
  imageAnchor.href = imageSrc;
  imageAnchor.download = "snap";

  imageAnchor.appendChild(imageTag);

  strip.appendChild(imageAnchor);
}

getConnectedDevices("videoinput").then(startVideo);
