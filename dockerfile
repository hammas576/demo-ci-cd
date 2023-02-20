##### dockerfile startshere#####
# Choose and name our temporary image.
FROM node:19.0.0-alpine3.16 as builder
# Add metadata identifying these images as our build containers (this will be useful later!)
LABEL stage=builder
# Take an SSH key as a build argument.
ARG ssh_prv_key
ARG ssh_pub_key

# Install dependencies required to git clone.
RUN apk update && \
apk add --update git && \
apk add --update openssh

# Authorize SSH Host
RUN mkdir -p /root/.ssh && \
    chmod 0700 /root/.ssh && \
    ssh-keyscan github.com > /root/.ssh/known_hosts

# Add the keys and set permissions
RUN echo "$ssh_prv_key" > /root/.ssh/id_rsa && \
    echo "$ssh_pub_key" > /root/.ssh/id_rsa.pub && \
    chmod 600 /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa.pub

# Clone a repository (my website in this case)
RUN git clone --branch dev git@github.com:workcampapp/backend.git cloned-files

FROM node:19.0.0-alpine3.16 as runner

# Copy across the files from our `intermediate` container
RUN mkdir files
COPY --from=builder /cloned-files/hr.management.services /files/
# Create app directory
#WORKDIR user.management.service
# RUN cat .env
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copi$
# where available (npm@5+)
# COPY files/package.json /app
# RUN git fetch && git pull origin dev
# RUN apk update && \
# apk add --update git && \
# apk add --update openssh
WORKDIR /files
#RUN cd files/user.management.service
RUN npm install
RUN npm run build
CMD [ "npm", "run", "start" ]
##### dockerfile endshere#####