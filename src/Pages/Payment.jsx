import '../assets/CSS/payment.css'
const Payment = ({close}) => {
  return (
    <>
        <div className="payment">
            <img width={300} src="/public/icon/image.png" alt="" />
            <i class="fa-solid fa-xmark" onClick={()=>close()}></i>
        </div>
    </>
  )
}

export default Payment