import React from "react"
import styled from "styled-components"

const Container = styled.li`
  display: flex;
  padding: 1rem 0;
  background-color: ${props => (props.index % 2 === 0 ? "#fff" : "#F9F9F9")};
`
const WrapThubmnail = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Thumbnail = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
`

const Description = styled.div`
  padding: 0rem 1rem;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`
type ListProps = {
  data: {
    id: number
    name: string
    numberOfWashroom: {
      urinate: number
      defecate: number
    }
    keyNeeded: boolean
    isFree: boolean
    isWifi: boolean
    thumbnail: string
    evaluation: number
  }
  index: number
}

const List: React.FC<ListProps> = ({ data, index }) => {
  return (
    <Container key={data.id} index={index}>
      <WrapThubmnail>
        <Thumbnail src={data.thumbnail} alt={data.name} />
      </WrapThubmnail>
      <Description>
        <h3>{data.name}</h3>
      </Description>
    </Container>
  )
}
export default List

{
  /* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image imageName="gatsby-astronaut.png" />
    </div> */
}
