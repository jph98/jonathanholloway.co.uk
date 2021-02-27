---
template: post
title: Simple provisioning of EC2 Instances with Cloudinit and Userdata
date: 2018-01-05T17:20:42.232Z
excerpt: >-
  I’ve been doing a fair amount with scripting AWS environments recently. Most
  of this has involved AWS and Ruby or Python. Cloudinit is…
thumb_img_path: >-
  images/Simple-provisioning-of-EC2-Instances-with-Cloudinit-and-Userdata/1*FrQBS-hD4LAV34__lzCtbA.jpeg
---
I’ve been doing a fair amount with scripting AWS environments recently. Most of this has involved AWS and Ruby or Python. Cloudinit is software that handles the early initialisation of cloud software and is built into most popular cloud providers, including AWS.

[https://cloudinit.readthedocs.io/en/latest/](https://cloudinit.readthedocs.io/en/latest/)

On creation of an AWS EC2 instance, you get the option to pass userdata — this can contain bootstrap information for the environment, dependencies to install, user accounts etc… . Of course, you can use various other software to do this, but for sake of simplicity cloudinit and userdata is good enough.

![](/images/Simple-provisioning-of-EC2-Instances-with-Cloudinit-and-Userdata/1*FrQBS-hD4LAV34__lzCtbA.jpeg)

#### Creating an EC2 instance

To create an ec2 instance using the AWS CLI command-line tool you can use the following:

    aws ec2 run-instances — image-id #{ami} — count #{num_of_instances}   
     — instance-type #{instance_type} — key-name #{keypair_name} \  
     — security-group-ids #{security_group_id} — subnet-id #{subnet_id}   
     — user-data file://#{userdata.txt}

#### Cloudinit Specification

Cloudinit user-data can be specified in various forms. There are some examples here in YAML format (another specification you can use):

[**Cloud config examples - Cloud-Init 17.2 documentation**  
*Add groups to the system # The following example adds the ubuntu group with members 'root' and 'sys' # and the empty…*cloudinit.readthedocs.io](http://cloudinit.readthedocs.io/en/latest/topics/examples.html "http://cloudinit.readthedocs.io/en/latest/topics/examples.html")[](http://cloudinit.readthedocs.io/en/latest/topics/examples.html)

You can also just use plain old bash if you prefix it with:

    #!/bin/bash -v

then you can just issue straightforward bash command, e.g.:

    yum update -y   
    yum install nginx

#### User Specific Commands

One thing I ran into was being able to setup specific user data, this can be achieved with a simple su for the user.

    su — ec2-user -c “mkdir dsrdeploy”

A more complex example would be the installation of NVM for node version management:

    su — ec2-user -c “curl -sL [https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh](https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh) | bash”  
    su — ec2-user -c “nvm install 8.5.0”  
    su — ec2-user -c “echo ‘nvm use v8.5.0’ >> /home/ec2-user/.bashrc”  
    su — ec2-user -c “nvm use 8.5.0”  
    su — ec2-user -c “nvm version”

#### Debugging Cloudinit Userdata Scripts

An EC2 instance can take minutes to boot up, that coupled with the installation of dependencies means that we really don’t want to run it over and over again to test it. It’s possible to kick-off cloudinit directly from the AWS instance to correct issues along the way.

To modify the script on the EC2 instance look for the scripts you’ve created under the instances folder and the specific instance ID that was created for you:

    vi /var/lib/cloud/instances/i-xxxxxxxx/scripts/part-001

Then to re-run the script you’ll need to clear the semaphores for the instance and kick it off the user scripts again with:

     sudo rm -Rf /var/lib/cloud/instances/i-038011e713f322960/sem  
     sudo /usr/bin/cloud-init single -n cc_scripts_user

#### Conclusion

That covers cloudinit and userdata in a fairly basic manner, there’s obviously a lot more to it, but that should give you what you need to get started. There’s a good blog post by Fabrizio Branca on the various options for provisioning AWS environments here.

[http://fbrnc.net/blog/2015/11/how-to-provision-an-ec2-instance](http://fbrnc.net/blog/2015/11/how-to-provision-an-ec2-instance)

I typically sway more towards Terraform personally for big stuff, but for the task in-hand here this was simple enough and good enough. I’m a consulting CTO (Interim/Fractional) and technology consultant, you can find out more here:

[https://www.hwintegral.com/services](https://www.hwintegral.com/services)
