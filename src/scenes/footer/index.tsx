
import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className=" bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
           <div className=" mt-16 basis-1/2 md:mt-0">
            <img src={Logo} alt="logo" />
            <p className="my-5">
            Eu volutpat odio facilisis mauris.
             Quam elementum pulvinar etiam non quam lacus suspendisse.
              Natoque penatibus et magnis dis parturient montes nascetur. 
              Diam ut venenatis tellus in metus vulputate eu scelerisque. 
            </p>
            <p>© Evogym All Rights Reserved.</p>
           </div>
           <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Massa lfguvekyr</p>
            <p className="my-5">Massa lfguvekyr</p>
            <p className="my-5">Massa lfguvekyr</p>
           </div>
           <div>
           <h4 className="font-bold ">Contact Us</h4>
            <p className="my-5">Massa lfguvekyrjeiuugukh</p>
            <p className="my-5">jhkehfcvnu5rueeyfwdvhn bjkfhu</p>
            <p>(333)425-6825</p>
           </div>
        </div>
    </footer>
  )
}

export default Footer