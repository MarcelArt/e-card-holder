import ProfileComponent from '@/components/ProfileComponent';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { FlatList } from 'react-native';

export default function ProfilesView() {
	const datas = [
		{
			id: 'abc',
			name: 'Marcel',
		},
		{
			id: '098',
			name: 'Marcel 2',
		},
	];

	return (
		<VStack className="mt-16 mx-2">
			<Heading size="3xl">Pilih profil</Heading>
			<FlatList
				data={datas}
				renderItem={({ item }) => <ProfileComponent id={item.id} name={item.name} />}
			/>
		</VStack>
	);
}
