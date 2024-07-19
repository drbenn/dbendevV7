import { Slider } from '@mantine/core';

const Experience = () => {
  return (
    <div id="Experience" className="section">
      <h1>Experience Section</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati expedita aperiam quo aliquid error facere maiores suscipit reprehenderit voluptates quibusdam consequatur veritatis, ea quia animi iure aut dolore. Dolorum laboriosam cumque ut sequi blanditiis nobis cupiditate soluta adipisci corrupti consequuntur unde perspiciatis autem, reiciendis, tempore tenetur nostrum suscipit totam alias?
      </p>
      <Slider
      color="pink"
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
    </div>
  )
}

export default Experience;