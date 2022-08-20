import React from "react";
import styled from "styled-components";
import ActionBar from "../Tweet/ActionBar";
import moment from "moment";
import { useNavigate, useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

const ProfilFeed = (props) => {
  return (
    <>
      <div>
        <TweetSection>
          <Link
            to={`/tweet/${props.tweet.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            {props.tweet.retweetFrom?.displayName && (
              <div  style={{ marginBottom:10 }}>
                {"retweet from:"}
                {props.tweet.retweetFrom?.displayName}
              </div>
            )}
            <UserArea>
              <UserPic src={props.tweet.author.avatarSrc} />
              <TextArea>
                <User>
                  {props.tweet.author.displayName}&nbsp;&nbsp;
                  <span>@{props.tweet.author.handle} &nbsp;</span>
                  <Timestamp>
                    {moment(props.tweet.timestamp).format("MMM Do")}
                  </Timestamp>
                </User>
                <div>{props.tweet.status}</div>
              </TextArea>
            </UserArea>
            <TweetArea>
              {props.tweet.media[0]?.url && (
                <PostPic src={props.tweet.media[0]?.url} />
              )}
              {}
            </TweetArea>
          </Link>
          <ActionBar tweetId={props.tweet.id} isLiked={props.tweet.isLiked} />
        </TweetSection>
      </div>
    </>
  );
};
export default ProfilFeed;

const UserPic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50px;
`;
const PostPic = styled.img`
  height: 350px;
  width: 500px;
`;
const UserArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
const User = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
const TweetArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextArea = styled.div`
  margin-left: 10px;
`;
const Timestamp = styled.div`
  color: black;
`;
const TweetSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-bottom: 20px;
`;
