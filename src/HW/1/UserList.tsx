type AddressType = {
    street: string; // ПОДПРАВЛЯЕМ any
    city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
    id: number;
    name: string;
    age: number;
    address: AddressType;
    // ПРИДЕТСЯ САМОМУ)
};

type UserListPropsType = {
    users: UserType[] // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>

            <ul>
                {props.users.map((UserListPropsType) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                    <li key={UserListPropsType.id}
                        id={`hw01-user-${UserListPropsType.id}`}>
                        <span> {UserListPropsType.name} </span>
                        <span> (Age: {UserListPropsType.age}) </span>
                        <span> Address:{UserListPropsType.address.street}, {UserListPropsType.address.city}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
