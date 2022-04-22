/*
marys@G7-7790 MINGW64 /d/Repo/dockertut/app (main)
$ docker run -dp 3000:3000 -w /d/Repo/dockertut/app -v ${PWD}:/app node:12-alpine sh -c "yarn install && yarn run dev"
docker: Error response from daemon: the working directory 'D:/Repo/dockertut/app' is invalid, it needs to be an absolute path.
See 'docker run --help'.

marys@G7-7790 MINGW64 /d/Repo/dockertut/app (main)
$ docker run -dp 3000:3000 -w //d/Repo/dockertut/app -v ${PWD}:/app node:12-alpine sh -c "yarn install && yarn run dev"
Unable to find image 'node:12-alpine' locally
12-alpine: Pulling from library/node
df9b9388f04a: Already exists
3bf6d7380205: Already exists
7939e601ee5e: Already exists
31f0fb9de071: Already exists
Digest: sha256:d4b15b3d48f42059a15bd659be60afe21762aae9d6cbea6f124440895c27db68
Status: Downloaded newer image for node:12-alpine
6a3be2834aa0ae96de833e4e3b3c297ce4bc7ca4ab63ff9ad8126a3adc809e5f

marys@G7-7790 MINGW64 /d/Repo/dockertut/app (main)


> Executing task: docker logs --tail 1000 -f 6a3be2834aa0ae96de833e4e3b3c297ce4bc7ca4ab63ff9ad8126a3adc809e5f <

yarn install v1.22.18
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 0.08s.
yarn run v1.22.18
error Couldn't find a package.json file in "/d/Repo/dockertut/app"
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

Terminal will be reused by tasks, press any key to close it.


Output of inspect container

  "HostConfig": {
    "Binds": [
      "D:\\Repo\\dockertut\\app;C:\\Program Files\\Git\\app"
    ],


    marys@G7-7790 MINGW64 /d/Repo/dockertut/app (main)
$ docker run -dp 3000:3000 -w //d/Repo/dockertut/app -v //d/Repo/dockertut/app:/app node:12-alpine sh -c "yarn install && yarn run dev"
0b40d3d2f80da16f249b4fa4e0e2cefb46c5f866dabb6cf33959812e64872263

marys@G7-7790 MINGW64 /d/Repo/dockertut/app (main)
$


yarn install v1.22.18
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 0.08s.
yarn run v1.22.18
error Couldn't find a package.json file in "/d/Repo/dockertut/app"
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
yarn install v1.22.18
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.07s.
yarn run v1.22.18
error Couldn't find a package.json file in "/d/Repo/dockertut/app"
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

*/
