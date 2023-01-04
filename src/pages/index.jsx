//hooks básicos
import { useState, useEffect, useMemo, useCallback } from 'react'

const Teste = () => {
  
  const [name, setName] = useState('Tarcisio');
  const [age, setAge] = useState(26);
  const handleChangeName = useCallback(() => {
    console.log('alterou nome')
    setName(prev => prev === 'Tarcisio' ? 'Jose' : 'Tarcisio')
  }, [])
  //useCallback = referencia de função
  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;
    console.log('age atual', age, newAge)    
    setAge(prev => prev === 26 ? 32 : 26)
  }, [age])
  /*useEffect(()=>{
    handleChangeName();
  },[]);
  //useMemo = referencia em variaveis ( consr, var, let)
  const calculo = useMemo(() => {
    console.log('calculou', age)
    return 10 * age;
  }, [age])//age é dependencia
  console.log('renderizou', calculo);
  */
  return (
    <div>
        <p>
            Idade:{age}
        </p>
        <p>
            Nome:{name}
        </p>
        <button onClick={handleChangeName}>Alterar nome</button>
        <button onClick={handleChangeAge}>Alterar idade</button>
    </div>
  )
}

export { Teste };