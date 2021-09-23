import Header from "./Header";
function PageNotFound() {
  return (
    <>
      <Header />
      <section className="py-5">
        <div className="my-5 py-5 text-center">
          <h1>404 Page</h1>
          <strong style={{ color: "red" }}>Oops! Page Not Found</strong>
          <p className="mt-4">This page request, server not found.</p>
        </div>
      </section>
    </>
  )
}

export default PageNotFound;