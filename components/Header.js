import Image from "next/image"


export default function Header() {
    return (
        <header className="header">
            <Image
                src="/images/troll-face.png" 
                className="header--image"
                alt="header image"
                width={60}
                height={60}
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}