export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Thaza Digital Services</h2>
        <form>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}
