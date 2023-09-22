import Image from "next/image";

const Modal = ({opened, onClose, bgColor="bg-k11_pc_mask_bg", children}: {opened: boolean, onClose?: () => void, bgColor?: string, children: React.ReactNode  }) => {
 
  return (
      <div style={{display: opened? 'block': 'none'}} className={`fixed top-0 left-0 w-full h-full k11_vertical_center z-100 ${bgColor}`}>
        <div onClick={() => {onClose && onClose()}} className='absolute right-8 top-8 cursor-pointer'>
            <Image src="/icons/cross.svg" width={26} height={26} alt="cross" />
        </div>
        {children}
      </div>
  )
}

export default Modal