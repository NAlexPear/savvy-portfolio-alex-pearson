export default function Contact(){
    return `
    <form class="container" action="https://formspree.io/alex@savvycoders.com" method="POST">
      <label for="firstname">First Name:</label>
      <input type="text" name="firstname" required>

      <label for="lastname">Last Name:</label>
      <input type="text" name="lastname" required>

      <label for="email">Email:</label>
      <input type="email" name="email" required>

      <input type="submit" value="Submit">
    </form>
  `;
}
