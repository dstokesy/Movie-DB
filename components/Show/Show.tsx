import cx from 'classnames';
import { IShow } from '../../types/Show';

export default function Show({ item }: { item: IShow }) {
    return <div>{item.title}</div>;
}
