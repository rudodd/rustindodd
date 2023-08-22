// Import componenets
import Image from 'next/image';

export default function Avatar(props) {

  const { selectedContent, showContent } = props;

  return (
    <div className={`avatar${!showContent ? ' hidden' : ''}`}>
    <Image src="/img/rustin-dodd.jpg" height="200" width="200" alt="Rustin Dodd" priority className={selectedContent != 'code' ? 'hidden' : ''} />
    <Image src="/img/ezra-foster.jpg" height="200" width="200" alt="Ezra Foster" className={selectedContent != 'music' ? 'hidden' : ''} />
  </div>
  )
}