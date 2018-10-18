import { h, Component } from 'preact';
import * as style from './style.scss';
import RangeInputElement from '../../custom-els/RangeInput';
import '../../custom-els/RangeInput';
import { linkRef, bind } from '../../lib/initial-util';

interface Props extends JSX.HTMLAttributes {}
interface State {}

export default class Range extends Component<Props, State> {
  rangeWc?: RangeInputElement;

  @bind
  private onTextInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.rangeWc!.value = input.value;
    const { onInput } = this.props;
    if (onInput) onInput(event);
  }

  render(props: Props) {
    const {
      children,
      ...otherProps
    } = props;

    const {
      value, min, max,
    } = props;

    return (
      <label class={style.range}>
        <span class={style.labelText}>{children}</span>
        <input
          type="number"
          class={style.textInput}
          value={value}
          min={min}
          max={max}
          onInput={this.onTextInput}
        />
        <div class={style.rangeWcContainer}>
          <range-input
            ref={linkRef(this, 'rangeWc')}
            class={style.rangeWc}
            {...otherProps}
          />
        </div>
      </label>
    );
  }
}
