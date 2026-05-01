export default function WhatsAppButton() {
  const whatsappNumber = '33753644261'
  const whatsappMessage = 'Hello! I would like to know more about your services.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      <div className="floating_btn">
        <a target="_blank" href={whatsappLink} rel="noopener noreferrer">
          <div className="contact_icon">
            <i className="fa fa-whatsapp my-float"></i>
          </div>
        </a>
        <p className="text_icon">Talk to us?</p>
      </div>
    </>
  )
}
