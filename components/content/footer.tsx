import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t mt-12">
        <div className="text-center text-gray-500 px-4 2xl:px-32 py-8">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  )
}
