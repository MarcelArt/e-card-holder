import AddIcon from '@/components/icons/AddIcon';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { FormControl, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control';
import { Heading } from '@/components/ui/heading';
import { Input, InputField, InputSlot } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { VStack } from '@/components/ui/vstack';
import { useState } from 'react';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function CreateProfile() {
	const [name, setName] = useState('');
	const [placeOfBirth, setPlaceOfBirth] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState(new Date());
	const [isShowDatePicker, SetIsShowDatePicker] = useState(false);

  const showMode = () => {
    DateTimePickerAndroid.open({
      value: dateOfBirth,
      onChange: (_, selectedDate) => setDateOfBirth(selectedDate!),
      mode: 'date',
      is24Hour: true,
    });
  };


	return (
		<Box className="h-full m-4">
			<VStack space="sm">
				<FormControl size="lg">
					<FormControlLabel>
						<FormControlLabelText>Nama</FormControlLabelText>
					</FormControlLabel>
					<Input>
						<InputField placeholder="Masukkan nama profil disini" value={name} onChangeText={(n) => setName(n)} />
					</Input>
				</FormControl>
				<FormControl size="lg">
					<FormControlLabel>
						<FormControlLabelText>Tempat lahir</FormControlLabelText>
					</FormControlLabel>
					<Input>
						<InputField
							placeholder="Masukkan tempat lahir disini"
							value={placeOfBirth}
							onChangeText={(n) => setPlaceOfBirth(n)}
						/>
					</Input>
				</FormControl>
				<FormControl size="lg" isReadOnly={true}>
					<FormControlLabel>
						<FormControlLabelText>Tanggal lahir</FormControlLabelText>
					</FormControlLabel>
					<Input>
						<InputField placeholder="Masukkan tanggal lahir disini" value={placeOfBirth} />
						<InputSlot>
							<Pressable onPress={showMode}>
								{AddIcon({ color: 'black', icon: 'date-range', size: 24 })}
							</Pressable>
						</InputSlot>
					</Input>
				</FormControl>
				<Button onPress={() => console.log('name :>> ', name)}>
					<ButtonText>Test</ButtonText>
				</Button>
			</VStack>
			{/* {isShowDatePicker ?? (
				<DateTimePickerAndroid value={dateOfBirth} mode="date" onChange={} />
			)} */}
		</Box>
	);
}
