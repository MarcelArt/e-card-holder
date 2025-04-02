import { useRouter } from 'expo-router';
import { Box } from './ui/box';
import { Heading } from './ui/heading';
import { Pressable } from './ui/pressable';
import { Text } from './ui/text';
import { VStack } from './ui/vstack';

interface ProfileComponentProps {
	id: string;
	name: string;
}

export default function ProfileComponent({ id, name }: ProfileComponentProps) {
    const router = useRouter();
    
    const onPress = () => router.navigate(`/${id}`);
    
	return (
		<Pressable className="my-2 bg-secondary-0 hover:bg-secondary-100 rounded-md p-2" onPress={onPress}>
			<VStack>
				<Heading size="lg">{name}</Heading>
				<Text className="text-primary-0">{id}</Text>
			</VStack>
		</Pressable>
	);
}
