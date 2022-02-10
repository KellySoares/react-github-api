import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const Profile = () => {

    const { githubState } = useGithub();

    return (
        <S.Wrapper>
            <S.Image src={githubState.user.avatar} alt="Avatar of user" />
            <S.InfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>

                    <S.UserName>
                        <h3>UserName:</h3>
                        <a href={githubState.user.html_url} target="_blank" rel="noreferrer">{githubState.user.login}</a>
                    </S.UserName>
                    <S.UserName>
                        <h3>Company:</h3>
                        <span>{githubState.user.company}</span>
                    </S.UserName>
                    <S.UserName>
                        <h3>Location:</h3>
                        <span>{githubState.user.location}</span>
                    </S.UserName>
                    <S.UserName>
                        <h3>Blog:</h3>
                        <a href={githubState.user.blog} target="_blank" rel="noreferrer">
                            {githubState.user.blog}
                        </a>
                    </S.UserName>
                </div>
                <S.Status>

                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>

                    <div>
                        <h4>Following</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gits</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.Status>
            </S.InfoUser>
        </S.Wrapper>
    )
}

export default Profile;