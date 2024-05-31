import { useGenerateRandomMailStringQuery, useGetDomainListQuery} from "../api/api.tsx";


const Profile = () => {

    const { data : MailString, error } = useGenerateRandomMailStringQuery({ count : 5 });
    const { data : ListDomain } = useGetDomainListQuery();

    console.log(MailString,ListDomain )
    return (
        <div>

        </div>
    );
};

export default Profile;
