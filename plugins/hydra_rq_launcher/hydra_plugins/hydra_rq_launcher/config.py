# Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved
from dataclasses import dataclass
from typing import Optional

from hydra.core.config_store import ConfigStore
from hydra.types import ObjectConf
from omegaconf import II


@dataclass
class RedisConf:
    # host address via REDIS_HOST environment variable, default: localhost
    host: str = II("env:REDIS_HOST,localhost")
    # port via REDIS_PORT environment variable, default: 6379
    port: int = II("env:REDIS_PORT,6379")
    # database via REDIS_DB environment variable, default: 0
    db: Optional[str] = II("env:REDIS_DB,0")
    # password via REDIS_PASSWORD environment variable, default: no password
    password: str = II("env:REDIS_PASSWORD,")
    # switch to run without redis server in single thread, for testing purposes only
    mock: bool = II("env:REDIS_MOCK,False")


@dataclass
class EnqueueConf:
    # maximum runtime of the job before it's killed (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit
    job_timeout: Optional[str] = None
    # maximum queued time before the job before is discarded (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit
    ttl: Optional[str] = None
    # how long successful jobs and their results are kept (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit
    result_ttl: Optional[str] = None
    # specifies how long failed jobs are kept (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit
    failure_ttl: Optional[str] = None
    # place job at the front of the queue, instead of the back
    at_front: bool = False
    # job id, will be overidden automatically by a uuid unless specified explicitly
    job_id: Optional[str] = None
    # description, will be overidden automatically unless specified explicitly
    description: Optional[str] = None


@dataclass
class RQConf:
    # enqueue configuration
    enqueue: EnqueueConf = EnqueueConf()
    # queue name
    queue: str = "default"
    # redis configuration
    redis: RedisConf = RedisConf()
    # stop after enqueueing by raising custom exception
    stop_after_enqueue: bool = False
    # wait time in seconds when polling results
    wait_polling: float = 1.0


@dataclass
class RQLauncherConf(ObjectConf):
    target: str = "hydra_plugins.hydra_rq_launcher.rq_launcher.RQLauncher"
    params: RQConf = RQConf()


ConfigStore.instance().store(
    group="hydra/launcher", name="rq", node=RQLauncherConf, provider="rq_launcher",
)
