import { Heading } from "@/components/ui/heading";
import { useLocalSearchParams } from "expo-router";

export default function ProfileView() {
    const { id } = useLocalSearchParams();

    return (
        <Heading>Hi, {id}</Heading>
    )
}