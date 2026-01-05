export default function Map() {
  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-6xl mx-auto mb-0">
        <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4150.663469630009!2d-36.56576622471946!3d-10.281662289838621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7045585ef802919%3A0x1bf0aa0cf1cff003!2sLorgil%20%C3%93tica!5e1!3m2!1spt-BR!2sbr!4v1745504762361!5m2!1spt-BR!2sbr"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Lorgil Ótica"
          ></iframe>
        </div>
      </div>
    </div>
  )
}