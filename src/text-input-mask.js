import BaseTextComponent from './base-text-component';
import React from 'react';

const INPUT_TEXT_REF = '$input-text';

export default class TextInputMask extends BaseTextComponent {

	getElement() {
		return this.refs[INPUT_TEXT_REF];
	}

	_onChangeText(text) {
		let self = this;

		if (!this._checkText(text)) {
			return;
		}

		self.updateValue(text)
			.then(maskedText => {
				if (self.props.onChangeText) {
					self.props.onChangeText(maskedText);
				}
			});
	}

	_checkText(text) {
		if (this.props.checkText) {
			return this.props.checkText(this.state.value, text);
		}

		return true;
	}

	render() {
		let customTextInputProps = {}

		if (this.props.customTextInput) {
			Input = this.props.customTextInput
			customTextInputProps = this.props.customTextInputProps || {}
		}

		const { options, ...props } = this.props;

		return (
			<input
				ref={INPUT_TEXT_REF}
				{...props}
				{...customTextInputProps}
				onChange={(event) => this._onChangeText(event.currentTarget.value)}
				value={this.state.value}
			/>
		);
	}
}
