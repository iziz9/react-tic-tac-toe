import React, { useState } from 'react'

const Test = () => {
  const [value, setValue] = useState('');
  const [listArray, setListArray] = useState(['haha', 'hoho'])

  const handleSubmit = (event) => {
    event.preventDefault();
    setListArray(prevList => { //값이 원래 가지고이썬 배열을 prevList로 가져옴
      return [...prevList, value]  // 기존밸류 + 임의의 prevList를 배열에 넣어주기
    })
    setValue('');
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button type="submit">  Add  </button>
      </form>
      <ul>
        {listArray.map((item, index) => {
          return (<div key={item}>
            <li>{item}</li>
            <input />
          </div>)
        })}
      </ul>

    </div>
  )
}

export default Test