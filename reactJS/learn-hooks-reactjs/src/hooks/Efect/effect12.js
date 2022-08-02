import { useEffect, useState } from "react";

export function Effect12() {
    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.title = title;
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);//render lại giao diện nhưng trong useEffect2 chỉ gọi 1 lần
            });
    }, []);// khi truyền mảng thì useEffect chỉ gọi hàm 1 lần nếu k có mảng thì luôn
    //được gọi

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            {show || <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>;
                })}
            </ul>}
        </div>
    );
}
export function Effect3() {
    const taps = ['posts', 'comments', 'albums']
    const [title, setTitle] = useState("");
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [show, setShow] = useState(false);
    const [showGotoTop, setGotoTop] = useState(false);
    //CallBack luôn đưuọc gọi khi Component mounted
    useEffect(() => {
        document.title = title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, [type]);// khi dependency thay đổi thì chạy lại hàm
    useEffect(() => {
        const handleScroll = () => {
            setGotoTop(window.scrollY > 200);
        };

        window.addEventListener("scroll",handleScroll );

        return () => {
            //xóa bỏ sự kiện trước khi gọi hàm
            //Clearup function luôn đưuọc gọi trước khi components unmounted trừ lần được mounted
            window.removeEventListener("scroll",(e)=>{
                handleScroll()
                console.log("scroll finished")
            } );
            console.log("scroll finished")
        };
    }, []);
    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {taps.map(tap => {
                return (
                    <button
                        key={tap}
                        style={type === tap ?
                            {
                                color: "#fff",
                                backgroundColor: "#000"
                            } : {}}
                        onClick={() => setType(tap)}
                    >{tap}</button>
                )
            })}
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            {show || <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title || post.name}</li>;
                })}
            </ul>}
            {showGotoTop && (
                <button
                    style={{
                        position: "fixed",
                        cursor: "pointer",
                        bottom: 20,
                        right: 20
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    );
}

export default Effect12;
