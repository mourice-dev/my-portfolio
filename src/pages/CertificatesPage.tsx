import Certificates from '../components/Certificates'

export default function CertificatesPage() {
  return (
    <div className="flex flex-col pt-12 bg-white">
      {/* We add top padding so it doesn't collide with the fixed navbar */}
      <Certificates featuredOnly={false} />
    </div>
  )
}
