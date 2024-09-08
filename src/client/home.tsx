
import Head from '../components/Head'
//

export default function Home() {
  return (
    <>
    <div className="main_body_wrap container mx-auto my-2 px-8 bg-white">
      <Head />
      {/* navi */}
      {/* items */}
      <h1 className="text-4xl font-bold">Components</h1>
      <hr className="my-2" />
      <div className="flex flex-wrap">
        <div className="p-2 m-0">
          <a href="/alert_dialog" className="" >
            <button className="btn-outline-blue">AlertDialog</button>
          </a>
        </div>
        <div className="p-2 m-0">
        <a href="/button" className="" >
          <button className="btn-outline-blue">Button</button>
        </a>
        </div>
        <div className="p-2">
          <a href="/card" className="" ><button className="btn-outline-blue">Card</button>
          </a>
        </div>
        <div className="p-2">
          <a href="/checkbox"><button className="btn-outline-blue">CheckBox</button>
          </a>
        </div>
        <div className="p-2">
          <a href="/input"><button className="btn-outline-blue">input</button>
          </a>
        </div>
        <div className="p-2">
          <a href="/navigation_menu">
             <button className="btn-outline-blue">navigation_menu</button>
          </a>
        </div>
        <div className="p-2">
          <a href="/textarea">
             <button className="btn-outline-blue">TextArea</button>
          </a>
        </div>
        <div className="p-2">
          <a href="/radio">
             <button className="btn-outline-blue">Radio</button>
          </a>
        </div>
        <div className="p-2">
          <a href="/select">
             <button className="btn-outline-blue">Select</button>
          </a>
        </div>
        <div className="p-2">
          <a href="/table">
             <button className="btn-outline-blue">Table</button>
          </a>
        </div>

      </div>
    </div>
    
  </>
  )
}
/*
<h1 className="text-4xl text-gray-700 font-bold my-2"
>Home!</h1>
*/