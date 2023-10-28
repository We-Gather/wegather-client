import { TagWrapper } from './style';

interface Props {
  id: number;
  text: string;
}

export default function ClubTag({ text }: Props) {
  return <TagWrapper># {text}</TagWrapper>;
}
