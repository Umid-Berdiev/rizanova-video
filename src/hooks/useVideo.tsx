import { useEffect, useRef, useState } from 'react'

const useVideo = (src: string) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = src
    }
  }, [src])

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (isFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
          // } else if (document.mozCancelFullScreen) {
          //   document.mozCancelFullScreen()
          // } else if (document.webkitExitFullscreen) {
          //   document.webkitExitFullscreen()
          // } else if (document.msExitFullscreen) {
          //   document.msExitFullscreen()
        }
      } else {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen()
          // } else if (videoRef.current.mozRequestFullScreen) {
          //   videoRef.current.mozRequestFullScreen()
          // } else if (videoRef.current.webkitRequestFullscreen) {
          //   videoRef.current.webkitRequestFullscreen()
          // } else if (videoRef.current.msRequestFullscreen) {
          //   videoRef.current.msRequestFullscreen()
        }
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return { videoRef, toggleFullscreen, toggleMute, isMuted }
}

export default useVideo
