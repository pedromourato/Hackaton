import styles from '../styles/Home.module.css'
export default function Footer(){

    return ( 
    <div>
    <div className={styles.month}>
    <ul>
          <li className={styles.prev}>&#10094;</li>
          <li className={styles.next}>&#10095;</li>
          <li>Junho<br /><span>2022</span></li>
        </ul>
      </div>
      <ul className={styles.weekdays}>
        <li>2°</li>
        <li>3°</li>
        <li>4°</li>
        <li>5°</li>
        <li>6°</li>
        <li>Sab</li>
        <li>Dom</li>
      </ul>

      <ul className={styles.days}> 
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
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

    <p className={styles.metereologia}>Previsões metereológicas</p>
    <div className={styles.image4}>
      <img src="../images/metereologia.png" />

    </div>

 
        <footer className={styles.footer}>
        <div className={styles.image4}>
          <img src="./images/buondiBr.svg" />
        </div>
        <div className={styles.image4}>
          <img src="./images/mercedesBr.svg" />
        </div>
        <div class={styles.image4}>
          <img src="./images/meoBr.svg"/>
        </div>

      </footer>
    </div>
    )
}