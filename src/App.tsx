import Player from './components/player/Player'
import sources from './source'


export default function App() {
    return (
        <div className="min-h-screen p-4 bg-white">
            {sources.map((item, index) => (
                <div key={index} className="flex items-start mb-4 border-b-2 pt-4 pb-8">
                    <div className="grow">
                        <p className="font-bold text-2xl">{index + 1}</p>
                    </div>
                    <div className="flex gap-4 w-[44rem]">
                        <div className="grow">
                            <Player src={item.vdo1} />
                        </div>
                        <div className="grow">
                            <Player src={item.vdo2} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}