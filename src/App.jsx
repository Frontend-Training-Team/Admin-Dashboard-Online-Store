function App() {
  return (
    <>
      <div className="min-h-screen text-white bg-black flex justify-center items-center">
        <div className="border p-5">
          <h2 className="text-6xl mb-3">Admin Dashboard</h2>
          <ul className="">
            <li className="text-3xl ">1.Make sure you know which branch you're at.📌</li>
            <li className="text-3xl ">2.Create a new branch for your task.</li>
            <li className="text-3xl ">3.Work on your code normally.</li>
            <li className="text-3xl ">4.Save your work and Commit messages must be clear</li>
            <li className="text-3xl ">5.Push your branch (NOT main!!!)📌</li>
            <li className="text-3xl ">5.git pull origin main</li>
            <li className="text-3xl ">6.git push origin &lt;nameBranch&gt;</li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;