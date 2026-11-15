import { Link } from "react-router-dom"
import "./NotFoundPage.css"

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <span>404</span>
      <h1>Halaman tidak ditemukan.</h1>
      <p>Alamat yang kamu buka tidak tersedia atau sudah dipindahkan.</p>
      <Link to="/">Kembali ke Home</Link>
    </main>
  )
}
