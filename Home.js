
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-6 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-brown-800">Karya Tinta</h1>
        <p className="text-lg text-brown-600">
          Platform eksklusif untuk menikmati karya sastra dan fiksi berkualitas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Langit Merah di Velandria</h2>
            <p className="text-sm text-gray-700">
              Sebuah thriller politik tentang konspirasi, kekuasaan, dan kebenaran, berlatar negara fiktif Velandria.
            </p>
            <p className="text-lg font-bold">Rp50.000</p>
            <Button>Beli Sekarang</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Prahara di Lembah Sunyi</h2>
            <p className="text-sm text-gray-700">
              Kisah misteri seorang dokter muda di pedalaman Aceh yang menemukan rahasia masa lalu dan tragedi berdarah.
            </p>
            <p className="text-lg font-bold">Rp50.000</p>
            <Button>Beli Sekarang</Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-brown-800">Tentang Karya Tinta</h2>
        <p>
          Karya Tinta adalah platform penjualan karya tulis digital milik pribadi yang menawarkan novel dan tulisan fiksi eksklusif.
          Setiap karya disajikan dengan penuh ketelitian dan imajinasi tinggi, hanya tersedia di platform ini.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-brown-800">Syarat dan Ketentuan</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Pembelian bersifat final dan tidak dapat dikembalikan.</li>
          <li>File digital akan dikirim ke email Anda setelah pembayaran terverifikasi.</li>
          <li>Pastikan email Anda aktif dan benar saat pembelian.</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-brown-800">Hubungi Kami</h2>
        <p>Email: admin@karyatinta.com</p>
        <p>Instagram: @karyatinta</p>
      </div>
    </div>
  );
}
