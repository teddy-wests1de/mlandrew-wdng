function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <p>&copy; {date.getFullYear()} Manfred & Berenice. All rights reserved.</p>
    </footer>
  )
}

export default Footer