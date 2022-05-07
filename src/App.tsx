interface ButtonProps {
  text?: string;
}


function Button(props: ButtonProps){
  return <button className="bg-red-700 p-2">{props.text ?? 'default'}</button>
}

export function App() {
  return (
    <>
    <Button text="Enviar"/>
    <Button text="Salvar"/>
    <Button text="Confirmar"/>
    </>
  )
}

