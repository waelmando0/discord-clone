interface MemberIdPage {
	params: {
		memberId: string;
		serverId: string;
	};
}

const MemberIdPage = ({ params }: MemberIdPage) => {
	return <div>Member Id Page</div>;
};

export default MemberIdPage;
