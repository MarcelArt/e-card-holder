import AddIcon from '@/components/icons/AddIcon';
import ProfileComponent from '@/components/ProfileComponent';
import { Box } from '@/components/ui/box';
import { Fab, FabIcon, FabLabel } from '@/components/ui/fab';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { useRouter } from 'expo-router';
import { FlatList } from 'react-native';

export default function ProfilesView() {
	const router = useRouter();
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
		<Box className="h-full">
			<VStack className="mt-16 mx-2">
				<Heading size="3xl">Pilih profil</Heading>
				<FlatList data={datas} renderItem={({ item }) => <ProfileComponent id={item.id} name={item.name} />} />
			</VStack>
			<Fab
				size="md"
				placement="bottom right"
				isHovered={false}
				isDisabled={false}
				isPressed={false}
				onPress={() => router.navigate('/create-profile')}
			>
				<FabIcon as={AddIcon({ color: 'white', icon: 'add', size: 28 })} />
			</Fab>
		</Box>
	);
}
