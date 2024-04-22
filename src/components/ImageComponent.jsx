function ImageComponent({src}) {
    
    return (
<>
<div className="img-wrapper">
<img className='main-img' src={src} alt="" />
</div>
</>
    )
}

export default ImageComponent