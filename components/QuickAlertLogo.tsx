import Image from 'next/image'

export default function QuickAlertLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <Image
        src="/QuickAlert/QuickAlert Logo.png"
        alt="QuickAlert Logo"
        width={40}
        height={40}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  )
}
