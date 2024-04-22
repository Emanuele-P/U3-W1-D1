import img from '../assets/img2.jpg'

function ImageComponent() {
    return (
<>
<div className="img-wrapper">
<img className='main-img' src={img} alt="" />
</div>
</>
    )
}

export default (ImageComponent)