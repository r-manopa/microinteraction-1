import { useRef, useState } from 'react'

export default function Player({ src }: { src: string }) {

    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const refVideo = useRef<HTMLVideoElement | null>(null)

    function handlePlay() {
        if (refVideo.current) {
            refVideo.current.load()
            refVideo.current.play()
            setIsPlaying(true)
        }
    }

    function handleEnded() {
        if (refVideo.current) {
            refVideo.current.pause()
            refVideo.current.currentTime = 0
            setIsPlaying(false)
        }
    }

    return (
        <div>
            <div className="relative">
                <div className="relative aspect-w-[506] aspect-h-[1038]">
                    <div className="bg-frame bg-contain bg-no-repeat z-10"></div>
                    <video 
                        ref={refVideo} 
                        onEnded={handleEnded}
                        muted
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                </div>
                <div className="absolute bottom-12 left-0 w-full px-12 z-20">
                    {!isPlaying &&
                        <button
                            onClick={handlePlay}
                            type="button"
                            className=" w-full text-white px-2 py-4 bg-blue-500 hover:bg-blue-400 transition-all rounded-xl"
                        >
                            Place Order
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}