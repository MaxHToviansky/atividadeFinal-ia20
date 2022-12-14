export default function(){
    
    function imageInscribe(i: number){
        let imgLink = `http://127.0.0.1:8080/api/get/image/${i}`
        return <img src={`http://127.0.0.1:8080/api/get/image/${i}`}></img>
    }
    return <>
        <div id='parentPlaceholder'>
            <div className='row'>
                <div className='imagePlaceholder'>{imageInscribe(1)}</div>
                <div className='imagePlaceholder'>{imageInscribe(2)}</div>
            </div>
            <div className='row'>
                <div className='imagePlaceholder'>{imageInscribe(3)}</div>
                <div className='imagePlaceholder'>{imageInscribe(4)}</div>
            </div>
        </div>
    </>
}