import qs from 'query-string';
import { useParams } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';

import { useSocket } from '@/components/providers/socket-provider';

interface ChatQueryProps {
	queryKey: string;
	apiUrl: string;
	paramKey: 'channelId' | 'conversationId';
	paramValue: string;
}

export const useChatQuery = ({
	queryKey,
	apiUrl,
	paramKey,
	paramValue,
}: ChatQueryProps) => {
	const { isConnected } = useSocket();
	const params = useParams();

	const fetchMessage = async ({ pageParam = undefined }) => {
		const url = qs.stringifyUrl(
			{
				url: apiUrl,
				query: {
					cursor: pageParam,
					[paramKey]: paramValue,
				},
			},
			{ skipNull: true }
		);

		const res = await fetch(url);
	};
};
