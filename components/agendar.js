import { useState } from "react"

export default () => {
  const [agendarAula, setAula] = useState("")
  const [toggle, setToggle] = useState(false)

  const [comprarAulas, setComprarAulas] = useState(0)
  const [toggle2, setToggle2] = useState(false)


  //agendar aulas 
  const submit = async () => {
    console.log("Cliquei no submit")
    console.log("User: " + localStorage.getItem('User'))
    console.log(agendarAula)
    console.log("agendar aula : " + agendarAula)
    const res = await fetch(
      '/api/agendar', {
      body: JSON.stringify({ clientId: localStorage.getItem('User'), agendarAula }),
      //
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    console.log("res: " + res)
    const json = res
    console.log("json: " + json)
  }

  //adicionar creditos



  async function addCredits(x) {
      async function CallBackCredits() {
        console.log("catchim pro backend credits: " + x)
        console.log("User: " + localStorage.getItem("User"))
        const res = await fetch(
          '/api/updateCredits/', {
          body: JSON.stringify({
            userId: localStorage.getItem("User"),
            credits: x
            //batota
          }),
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST"
        })
        const json = await res.json()
        console.log(json)
        localStorage.setItem("Credits", json.credits)
        console.log(localStorage)
        setToggle2((prev) => !prev)
      }

      await CallBackCredits()
    
  }

  return (
    <div>
      {!toggle && !toggle2 ?
        <div>
          <input value="Agendar Aulas" type="button" onClick={() => setToggle((prev) => !prev)} />
          <input value="Comprar Aulas" type="button" onClick={() => setToggle2((prev) => !prev)} />
        </div> : ""}
      {toggle ?
        <div>
          <input value={agendarAula} type="date" onChange={(e) => setAula(() => e.target.value)} />
          <input value="Submeter" type="button" onClick={submit} />
          < input value="X" type="button" onClick={() => setToggle((prev) => !prev)} />
        </div>
        : ""
      }

      {toggle2 ?
        <div>
          <input type="Button" defaultValue="3" onClick={() => addCredits(3)} />
          <input type="Button" defaultValue="5" onClick={() => addCredits(5)} />
          <input type="Button" defaultValue="7" onClick={() => addCredits(7)} />
          < input value="X" type="button" onClick={() => setToggle2((prev) => !prev)} />
        </div>
        : ""
      }
    </div>
  )
}


/*
<div class="month"> 
        <ul>
          <li class="prev">&#10094;</li>
          <li class="next">&#10095;</li>
          <li>August<br><span style="font-size:18px">2022</span></li>
        </ul>
      </div>

      <ul class="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>

      <ul class="days"> 
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li><span class="active">10</span></li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
      </ul>

      */